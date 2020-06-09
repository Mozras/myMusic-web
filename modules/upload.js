/* eslint-disable linebreak-style */
'use strict'

const fs = require('fs-extra')
const FileData = require('../modules/data.js')
const TagData = require('../modules/tags.js')


module.exports = class Uploads {

	//this is where the file gets sent to when uploaded
	async uploadFile(path, type, name) {

		try{

			//creates a new path to public folder
			const dirPath = `./public/uploads/${name}`
			if (dirPath === './public/uploads/') throw new Error('Upload cant be empty')

			//copies from old temp dir to public
			//cant have duplicate files with option overwrite
			await fs.copy(path, dirPath, { overwrite: false, errorOnExist: true})

			//this removes the ./public from the path as it messed with html audio tags
			const stringSplit = dirPath.split('./public')

			//gets ID3 tags from file
			const gettags = new TagData()
			const fileTag = await gettags.getTags(dirPath)

			//sends data to FileData function
			const getdata = new FileData()
			getdata.getData(stringSplit, name, type, fileTag)

			return true

		} catch(err) {
			throw err
		}
	}

}
