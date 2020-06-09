/* eslint-disable linebreak-style */
'use strict'

const FileData = require('../modules/data.js')


describe('getPath()', () => {

	test('sucesfully push data', async done => {
		try {
			expect.assertions(1)

			const dir1 = '/dir/some.mp3'

			const upload = new FileData()
			upload.getData(dir1, 'some.mp3', 'audio/mp3', 'Tags: {path: [Array], name: some.mp3')
			const data = upload.getData()
			expect(data).toBe(true)
			done()
		} catch (err) {
			throw err
		}
	})

	test('push empty string', async done => {
		try {
			expect.assertions(1)

			const dir1 = ' '
			const upload = new FileData()
			upload.getData(dir1)
			const data = upload.getData()
			expect(data).toEqual(true)
			done()
		} catch (err) {
			throw err
		}
	})
})


describe('getAll()', () => {

	test('return Data', async done => {
		expect.assertions(1)
		const dir1 = '/dir/some.mp3'
		const upload = new FileData()
		upload.getData(dir1, 'some.mp3', 'audio/mp3', 'Tags: {path: [Array], name: some.mp3')
		const data = upload.getAll()
		expect(data).toEqual( // 1
			expect.arrayContaining([ // 2
			  expect.objectContaining({ // 3
					'name': 'some.mp3' // 4
			  })
			])
		  )
		done()
	})


})

