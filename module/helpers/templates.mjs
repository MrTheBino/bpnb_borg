/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/bpnb_borg/templates/actor/parts/actor-features.hbs',
    'systems/bpnb_borg/templates/actor/parts/actor-items.hbs',
    'systems/bpnb_borg/templates/actor/parts/actor-spells.hbs',
    'systems/bpnb_borg/templates/actor/parts/actor-weapons.hbs',
    'systems/bpnb_borg/templates/actor/parts/actor-effects.hbs',
    'systems/bpnb_borg/templates/actor/parts/actor-armour.hbs',
    // Item partials
    'systems/bpnb_borg/templates/item/parts/item-effects.hbs',
  ]);
};
