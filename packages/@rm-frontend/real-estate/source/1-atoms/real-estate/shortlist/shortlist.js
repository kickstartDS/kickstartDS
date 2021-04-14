import Cookies from 'js-cookie';

const cookieName = 'realEstateShortlist';

const actions = {
  add: 'shortlist.add',
  remove: 'shortlist.remove',
};
const events = {
  update: 'shortlist.update',
};

const ids = new Set(Cookies.getJSON(cookieName));

function update(newIds) {
  window.rm.radio.emit(events.update, newIds);
  Cookies.set(cookieName, [...newIds]);
}

window.rm.radio.on(actions.add, (_, id) => {
  ids.add(id);
  update(ids);
});

window.rm.radio.on(actions.remove, (_, id) => {
  ids.delete(id);
  update(ids);
});

export default {
  has(id) {
    return ids.has(id);
  },
  get size() {
    return ids.size;
  },
  actions,
  events,
};
