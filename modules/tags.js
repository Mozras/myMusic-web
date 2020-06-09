/* eslint-disable linebreak-style */
'use strict'
const NodeID3 = require('node-id3')

module.exports = class TagData {

	async getTags(path) {

		// takes ID3 tags from file which gets passed on from its path
		const tags = NodeID3.read(path)

		// then returns the data
		return tags
	}

	CreateTag(path, ID3) {

		//updates a files tags with supplied ID3 data
		NodeID3.update(ID3, path)

		//returns updated tags from provided file
		const tags = NodeID3.read(path)
		return tags
	}

}

