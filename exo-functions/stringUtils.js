/* Ecrire une fonction reverseStr qui prend en paramètre une string et qui retourne cette string inversé.
Si le paramètre passé est 'Hello!' la fonction devra retourné '!olleH' */

const reverseStr = (clothes) => {
  clothes = clothes.split('').reverse().join('')
  return clothes
}
reverseStr('boots')
console.log(reverseStr('boots'))

const isPalindrome = (Palind) => {
  if (Palind === reverseStr(Palind)) {
    return true
  } else {
    return false
  }
}

isPalindrome('umbrella')
console.log(isPalindrome('umbrella'))

/*Ajouter au fichier précédent une fonction isPalindrome qui prend une string en paramètre et qui retourne true si la string est un palindrome,
sinon la fonction devra retourner false. Vous devrez utiliser la fonction reverseStr pour effectuer cette vérification.*/