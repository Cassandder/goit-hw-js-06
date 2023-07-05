const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`)

categories.forEach(item => {
  const titleCategories = item.querySelector('h2');
const elementsCategory = item.querySelectorAll('li')
  console.log(`Category: ${titleCategories.textContent} 
  Elements: ${elementsCategory.length}`)
})
// я перечитал несколько раз задиния 
// и не могу понять что я зделал не так, 
// там сказано использовать метод forEach, я так и сделал!