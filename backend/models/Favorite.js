const db = require('../config/db');

class Favorite {
  static async getByUserId(userId) {
    return db('favorites')
      .join('templates', 'favorites.template_id', '=', 'templates.id')
      .where('favorites.user_id', userId)
      .select('templates.*');
  }

  static async find(userId, templateId) {
    return db('favorites')
      .where({ user_id: userId, template_id: templateId })
      .first();
  }

  static async add(userId, templateId) {
    return db('favorites').insert({ user_id: userId, template_id: templateId });
  }

  static async remove(userId, templateId) {
    return db('favorites')
      .where({ user_id: userId, template_id: templateId })
      .del();
  }
}

module.exports = Favorite;
