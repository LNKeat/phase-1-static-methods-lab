class Formatter {
  constructor(str){
    this.str = str
  }
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9- ']+/g, '');
  }
  static titleize(str){
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let strArr = str.split(' ')
    let editedArr = []
    for(let i = 0; i < strArr.length; i++){
      let ele = strArr[i]
      if(!except.includes(ele) || i === 0){
        editedArr.push(this.capitalize(ele))
      }else{
        editedArr.push(ele)
      }
    }
    return editedArr.join(' ')
  }
}