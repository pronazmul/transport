document.addEventListener('DOMContentLoaded', function () {
  const XEBAY_API_URL = 'https://svcs.ebay.com/'
  const XEBAY_SOA_SECURITY_APPNAME = 'repatria-testapp-PRD-dfcc2d46c-a326c721'
  const XEBAY_SOA_GLOBAL_ID = 'EBAY-US'
  const XEBAY_SOA_OPERATION_NAME = 'findItemsByKeywords'
  const CORS_API_KEY = 'temp_02f7ba0c56f4562668570e98e47aa170'

  const searchQuery = 'Benin Bronzes'
  let searchResults = []
  let isLoading = false
  let pageNumber = 1
  let entriesPerPage = 100
  let totalPages = 0
  let hasMore = true
  let totalEntries = 0
  let showInfoPopup = false
  let activeTab = 0
  let hoveredImage = null
  let hoveredImageIndex = null

  // const popupRef = document.getElementById('popup')
  // const rootElement = document.getElementById('root')
  // const loadingElement = document.getElementById('loading')

  // const renderTabLabel = (label, tabIndex) => {
  //   return activeTab === tabIndex ? `[${label}]` : label
  // }

  // const toggleInfoPopup = () => {
  //   showInfoPopup = !showInfoPopup
  //   console.log(showInfoPopup)
  //   if (!showInfoPopup) {
  //     closePopup()
  //   }
  //   render()
  // }

  async function find() {
    const response = await axios.get(
      `https://proxy.cors.sh/${XEBAY_API_URL}services/search/FindingService/v1?keywords=${searchQuery}&paginationInput.pageNumber=1&paginationInput.entriesPerPage=${entriesPerPage}`,
      {
        headers: {
          'X-EBAY-SOA-SECURITY-APPNAME': XEBAY_SOA_SECURITY_APPNAME,
          'X-EBAY-SOA-GLOBAL-ID': XEBAY_SOA_GLOBAL_ID,
          'X-EBAY-SOA-OPERATION-NAME': XEBAY_SOA_OPERATION_NAME,
          'x-cors-api-key': CORS_API_KEY,
        },
      }
    )

    // const result = await xml2js.parseStringPromise(response.data)
    const options = {
      ignoreAttributes: false,
    }
    const jsonData = fxparser.parse(response.data, options)
    console.log(jsonData)
  }
  find()

  // const closePopup = () => {
  //   showInfoPopup = false
  //   render()
  // }

  // const showImagePopup = (image, index) => {
  //   hoveredImage = image
  //   hoveredImageIndex = index
  //   render()
  // }

  // const hideImagePopup = () => {
  //   hoveredImage = null
  //   render()
  // }

  // const handleTabChange = (newValue) => {
  //   activeTab = newValue
  //   render()
  // }

  // const handleChange = (value) => {
  //   handleSearch(value)
  // }

  // const handleFocus = () => {
  //   // handle focus
  // }

  // const handleBlur = () => {
  //   // handle blur
  // }

  // const handleSearch = async (value = 1) => {
  //   isLoading = true
  //   // render()

  //   try {
  //     const response = await axios.get(
  //       `https://proxy.cors.sh/${XEBAY_API_URL}services/search/FindingService/v1?keywords=${searchQuery}&paginationInput.pageNumber=${value}&paginationInput.entriesPerPage=${entriesPerPage}`,
  //       {
  //         headers: {
  //           'X-EBAY-SOA-SECURITY-APPNAME': XEBAY_SOA_SECURITY_APPNAME,
  //           'X-EBAY-SOA-GLOBAL-ID': XEBAY_SOA_GLOBAL_ID,
  //           'X-EBAY-SOA-OPERATION-NAME': XEBAY_SOA_OPERATION_NAME,
  //           'x-cors-api-key': CORS_API_KEY,
  //         },
  //       }
  //     )

  //     const result = await xml2js.parseStringPromise(response.data)
  //     const items = result.findItemsByKeywordsResponse.searchResult[0].item
  //     const entriesPerPage =
  //       result.findItemsByKeywordsResponse.paginationOutput[0].entriesPerPage
  //     const totalPages =
  //       result.findItemsByKeywordsResponse.paginationOutput[0].totalPages
  //     const totalEntries =
  //       result.findItemsByKeywordsResponse.paginationOutput[0].totalEntries

  //     searchResults = items
  //     pageNumber = value
  //     entriesPerPage = entriesPerPage[0]
  //     totalPages = totalPages[0]
  //     totalEntries = totalEntries[0]
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     isLoading = false
  //     render()
  //   }
  // }

  // const render = () => {
  //   const pagination = renderPagination()
  //   const content = renderContent()

  //   rootElement.innerHTML = ''
  //   rootElement.appendChild(pagination)
  //   rootElement.appendChild(content)
  // }

  // const renderPagination = () => {
  //   const paginationElement = document.createElement('div')
  //   paginationElement.classList.add('root')

  //   const entriesInfo = document.createElement('Typography')
  //   entriesInfo.textContent = `Showing ${entriesPerPage} of ${totalEntries} Benin Bronzes`

  //   const paginationControl = document.createElement('div')
  //   paginationControl.style.display = 'flex'
  //   paginationControl.style.justifyContent = 'space-between'
  //   paginationControl.style.alignItems = 'center'
  //   paginationControl.style.fontSize = '25px'
  //   paginationControl.style.fontFamily = 'lightnarrow'

  //   paginationControl.appendChild(entriesInfo)

  //   const paginationComponent = document.createElement('Pagination')
  //   paginationComponent.setAttribute('count', totalEntries)
  //   paginationComponent.setAttribute('page', pageNumber)
  //   paginationComponent.addEventListener('change', (event) =>
  //     handleChange(event.target.value)
  //   )

  //   paginationControl.appendChild(paginationComponent)
  //   paginationElement.appendChild(paginationControl)

  //   return paginationElement
  // }

  // const renderContent = () => {
  //   const contentElement = document.createElement('div')

  //   if (isLoading) {
  //     const loadingElement = document.createElement('div')
  //     loadingElement.textContent = 'Loading data please wait...'
  //     contentElement.appendChild(loadingElement)
  //   } else {
  //     const gridContainer = renderGridContainer()
  //     contentElement.appendChild(gridContainer)
  //   }

  //   return contentElement
  // }

  // const renderGridContainer = () => {
  //   const gridContainerElement = document.createElement('div')
  //   gridContainerElement.classList.add('grid-container')

  //   if (searchResults) {
  //     searchResults.forEach((item, index) => {
  //       const gridItem = renderGridItem(item, index)
  //       gridContainerElement.appendChild(gridItem)
  //     })
  //   } else {
  //     const noRecordsElement = document.createElement('div')
  //     noRecordsElement.textContent = 'No Records found'
  //     gridContainerElement.appendChild(noRecordsElement)
  //   }

  //   return gridContainerElement
  // }

  // const renderGridItem = (item, index) => {
  //   const gridItemElement = document.createElement('div')
  //   gridItemElement.classList.add('grid-item')

  //   const imageElement = document.createElement('img')
  //   imageElement.classList.add('croppedImage')
  //   imageElement.src = item.galleryURL[0].replace('140.jpg', '1600.jpg')
  //   imageElement.alt = item.title[0]

  //   imageElement.addEventListener('mouseenter', () =>
  //     showImagePopup(item, index)
  //   )
  //   imageElement.addEventListener('mouseleave', hideImagePopup)

  //   gridItemElement.appendChild(imageElement)

  //   return gridItemElement
  // }

  // render()

  // const infoPopupElement = document.querySelector('.ebay-des')
  // if (infoPopupElement) {
  //   infoPopupElement.addEventListener('click', toggleInfoPopup)
  // }
})
