export default function (Glide, Components, Events) {
  return {
    mount() {
      Events.on('run', () => {
        Components.Controls.setActive();
      });
    },
  };
}
