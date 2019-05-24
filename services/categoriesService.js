export class CategoriesService {
  static fetchCategories(apps = []) {
    const categories = new Set()
    apps.forEach(app => {
      categories.add(app.category)
    })
    return categories
  }
}
