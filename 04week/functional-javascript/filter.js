function getShortMessages(messages){
return messages.filter(function(word){
return word.message.length < 50
}).map(function(item){
	return item.message
})
}
module.exports = getShortMessages