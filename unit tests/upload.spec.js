/* eslint-disable linebreak-style */
/* eslint-disable quotes */

'use strict'

const mock = require('mock-fs')
const Uploads = require('../modules/upload.js')

describe('uploadFile()', () => {

	beforeEach( async() => {
		mock({
			 '/dir/music.mp3': ' ',
			 '/dir/some.mp3': ' ',
			 '/dir/rap.mp3': ' ',
			 '/dir/bass.mp3': ' ',
		})

	})

	afterEach( async() => {
		mock.restore()
	})

	test('Upload Mp3 files', async done => {
		try {
			expect.assertions(1)
			const upload = new Uploads()
			const valid = await upload.uploadFile('/dir/rap.mp3', 'audio/mp3', 'rap.mp3')
			expect(valid).toEqual(true)
		} catch (err) {
			throw err
		} finally {
			done()
		}

	})

	test('Upload duplicate files', async done => {
		try {
			expect.assertions(1)
			const upload = new Uploads()
			const dir1 = '/dir/music.mp3'
			await upload.uploadFile(dir1, 'audio/mp3', 'music.mp3')
			await upload.uploadFile(dir1, 'audio/mp3', 'music.mp3')
		} catch (err) {
			expect(err.message).toEqual('\'./public/uploads/music.mp3\' already exists')
			done()
		}
	})

	test('Error if blank upload', async done => {
		try {
			expect.assertions(1)
			const upload = new Uploads()
			await upload.uploadFile('', '', '')
		} catch (err) {
			expect(err.message).toEqual('Upload cant be empty')
			done()
		}
	})
})
