/* eslint-disable linebreak-style */
'use strict'

const data = []

//gets all the data from the list and returns it
module.exports = class FileData {

	getData(path, name, type, tag) {

		//pushes the path, file name and tags to a list
		data.push({path, name, type, tag})
		return true
	}

	//takes all data and returns it.
	getAll() {
		return data
	}

}


