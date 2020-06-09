/* eslint-disable linebreak-style */
'use strict'
const mock = require('mock-fs')
const TagData = require('../modules/tags.js')


describe('getTags()', () => {


	beforeEach( async() => {
		mock({
			'./public/avatars:guitar.mp3': ' ',
			'./public/avatars:dubstep.mp3': ' ',
			'/dir/bass.mp3': Buffer.from([8, 6, 7, 5, 3, 0, 9]),
			'/dir/metal.mp3': Buffer.from([8, 6, 7, 5, 3, 0, 9]),
		})
	})

	afterEach( async() => {
		mock.restore()
	})

	test('Read empty file with no tags', async done => {

		try {
			expect.assertions(1)
			const dirPath = '/dir/metal.mp3'
			const gettags = new TagData()
			const valid = await gettags.getTags(dirPath)
			expect(valid).toEqual(false)
			done()

		} catch (err) {
			throw err
		}
	})

})

describe('CreateTag()', () => {

	beforeEach( async() => {
		mock({
			'./public/avatars:guitar.mp3': ' ',
			'./public/avatars:dubstep.mp3': ' ',
			'/dir/bass.mp3': Buffer.from([8, 6, 7, 5, 3, 0, 9]),
			'/dir/metal.mp3': Buffer.from([8, 6, 7, 5, 3, 0, 9]),
		})
	})

	afterEach( async() => {
		mock.restore()
	})
	test('Update tags on empty text file', async done => {

		try {
			expect.assertions(1)

			const ID3 = [{
				title: 'Tomorrow',
				artist: 'Kevin Penkin',
				album: 'TVアニメ「メイドインアビス」オリジナルサウンドトラック',
				APIC: '/dir/bass.mp3',
				TRCK: '27'
			}]

			const path = '/dir/bass.mp3'
			const tagdata = new TagData()
			const valid = tagdata.CreateTag(path, ID3)
			expect(valid).toEqual({'raw': {}})
			done()

		} catch (err) {
			throw err
		}

	})

})


