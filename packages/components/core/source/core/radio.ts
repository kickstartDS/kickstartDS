import PubSub from 'pubsub-js';
import { inBrowser } from './domLoaded';

type Token = string;
type Message = string;
type SubscriptionListener<T> = (message: string, data?: T) => void;

export const radio = {
  /**
   * Subscribes the passed function to the passed message.
   * Every returned token is unique and should be stored if you need to unsubscribe
   */
  on<T = any>(message: Message, func: SubscriptionListener<T>): Token {
    return PubSub.subscribe(message, func);
  },

  /**
   * Subscribes the passed function to the passed message once
   */
  once<T = any>(message: Message, func: SubscriptionListener<T>) {
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
   *
   * @example // Unsubscribing with a token
   * var token = window._ks.radio.on('mytopic', myFunc);
   * window._ks.radio.off(token);
   * @example // Unsubscribing with a function
   * window._ks.radio.off(myFunc);
   * @example // Unsubscribing from a topic
   * window._ks.radio.off('mytopic');
   */
  off<T = any>(
    tokenOrFunction: Token | SubscriptionListener<T>
  ): Token | boolean {
    return PubSub.unsubscribe(tokenOrFunction);
  },

  /**
   * Publishes the message, passing the data to it's subscribers
   */
  emit<T = any>(message: Message, data: T): boolean {
    return PubSub.publish(message, data);
  },

  /**
   * Publishes the message synchronously, passing the data to it's subscribers
   */
  emitSync<T = any>(message: Message, data: T): boolean {
    return PubSub.publishSync(message, data);
  },
};

if (inBrowser) {
  window._ks = window._ks || { radio };
}

declare global {
  interface Window {
    _ks: {
      radio: typeof radio;
    };
  }
}
