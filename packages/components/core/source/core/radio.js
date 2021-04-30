import PubSub from 'pubsub-js';
import { inBrowser } from './domLoaded';

/**
 * @callback RecievedCallback
 * @param { String } message
 * @param {} data
 */

if (inBrowser) {
  window.rm = window.rm || {};
  window.rm.radio = {
    /**
     * Subscribes the passed function to the passed message.
     * Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @param { String } message The message to subscribe to
     * @param { RecievedCallback } func The function to call when a new message is published
     * @return { String }
     */
    on(message, func) {
      return PubSub.subscribe(message, func);
    },

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @param { String } message The message to subscribe to
     * @param { RecievedCallback } func The function to call when a new message is published
     * @return { undefined }
     */
    once(message, func) {
      PubSub.subscribeOnce(message, func);
    },

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
     * - When passed a function, removes all subscriptions for that function
     *
     * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = window.rm.radio.on('mytopic', myFunc);
     * window.rm.radio.off(token);
     * @example // Unsubscribing with a function
     * window.rm.radio.off(myFunc);
     * @example // Unsubscribing from a topic
     * window.rm.radio.off('mytopic');
     */
    off(tokenOrFunction) {
      return PubSub.unsubscribe(tokenOrFunction);
    },

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    emit(message, data) {
      return PubSub.publish(message, data);
    },

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    emitSync(message, data) {
      return PubSub.publishSync(message, data);
    },
  };
}
