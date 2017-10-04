const beyonceTweet = {
    name: 'Beyoncé',
    handle: '@beyonce',
    text: '#LEMONADE the Visual Album.'
}

const links = [
  'https://twitter.com/mmart168',
  'https://twitter.com/beyonce',
  'http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg'
]

const modifyText = () => {
  //document.querySelector('#freebie').innerHTML = 'Example Freebie!'
  //console.log('modifying text')
  // YOUR CODE BELOW THIS LINE.

  //Changes the text of message2 --> the message of the BeyonceTweet object
  document.querySelector('#message2').innerHTML = beyonceTweet.text

  // Change the text of link2 --> the name from the BeyonceTweet object
  document.querySelector('#link2').innerHTML = beyonceTweet.name

  // Change the text of user2 --> the handle from the BeyonceTweet object
  document.querySelector('#user2').innerHTML = beyonceTweet.handle
}

const changeLinkAndImageAttributes = () => {
  //console.log('changing link attribute')
  // YOUR CODE BELOW THIS LINE
  /* Step by Step
  Step 1: What selector?
  Step 2: What do you want to change?
  Step 3: What do you want to change it to?
  */

// Sets the href attribute for link1 -->  point to the first element in the links array
document.querySelector('#link1').href = links[0]

// Sets the href attribute for link2 -->  point to the second element in the links array
document.querySelector('#link2').href = links[1]

// Sets the src attribute for the beyonce image -->  point to the third element in the links array
document.querySelector('#beyonce').src = links[2]

}

const changeClassAttribute = () => {
  //console.log('changing class attribute')
  // YOUR CODE BELOW THIS LINE

/*
document.getElementByClass('.tweet')[0].className = 'tweet-pink'
document.getElementByClass('.tweet')[0].className = 'tweet-pink'
*/

document.querySelector('#tweet1').className = 'tweet-pink'
document.querySelector('#tweet2').className = 'tweet-pink'

/* -- Why this one is not working --
document.querySelectorAll('#tweet').className = 'tweet-pink'
*/
}

const appendElements = () => {
  //console.log('appending element')
  // YOUR CODE BELOW THIS LINE
  // Goal: <a href = "https://f17.ebook.mmart.us/">Intro to JavaScript<a>

  // -- Option 1 --
  document.querySelector('#tweet1').innerHTML += '<a href = "https://f17.ebook.mmart.us/">Intro to JavaScript<a>' + '<br />'
  document.querySelector('#tweet1').innerHTML += '<a href = "http://thewritepractice.com/wp-content/uploads/2012/05/Alot-vs-a-lot1-600x450.png">A Lot!<a>'

  /* -- Option 2 --
  const a = document.createElement('a')
  const newContent = document.createTextNode('Intro to JavaScript')
  a.appendChild(newContent)
  a.href = 'https://f17.ebook.mmart.us/'
  document.querySelector('#tweet1').appendChild(a)
  */
}
