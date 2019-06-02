import categories from '../data/categories.json'

export class CategoriesService {
  static fetchCategories() {
    return categories
  }
}
