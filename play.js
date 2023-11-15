let data = [
  {
    id: '57488f80498ef9ed5de459d6',
    created_at: '2016-05-27T18:18:40.000Z',
    prefix: 'https://fastly.4sqi.net/img/general/',
    suffix: '/67444196_4GI_X_AgFNduNOv91TmR6iV8XRyiFAjyU1dKYb83HeU.jpg',
    width: 1440,
    height: 1440,
    classifications: ['food'],
  },
]

console.log(
  data.map((item) => {
    return `${item.prefix}${item.height}x${item.width}${item.suffix}`
  })
)
