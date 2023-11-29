import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import xml2js from 'xml2js'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Pagination from '@material-ui/lab/Pagination'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      color: '#fff',
    },
  },

  body: { background: '#ffffff!important' },
  infoPopup: {
    position: 'fixed', // Use 'fixed' to position relative to the viewport
    background: '#fff',
    border: '1px solid #000',
    padding: '10px',
    display: 'none', // Initially hidden
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    width: '40%',
    color: 'black',
    padding: '5rem',
    transform: 'translate(-50%, -50%)', // Adjust for centering
    zIndex: 1000, // Ensure it's above other elements
  },

  showPopup: {
    display: 'block',
  },
}))

const XEBAY_API_URL = process.env.REACT_APP_XEBAY_API_URL
const XEBAY_SOA_SECURITY_APPNAME =
  process.env.REACT_APP_XEBAY_SOA_SECURITY_APPNAME
const XEBAY_SOA_GLOBAL_ID = process.env.REACT_APP_XEBAY_SOA_GLOBAL_ID
const XEBAY_SOA_OPERATION_NAME = process.env.REACT_APP_XEBAY_SOA_OPERATION_NAME
const CORS_API_KEY = process.env.REACT_APP_CORS_API_KEY

const Ebay = () => {
  const [searchQuery, setSearchQuery] = useState('Benin Bronzes')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [entriesPerPage, setEntriesPerPage] = useState(100)
  const [totalPages, setTotalPages] = useState(0)
  const [hasMore, setHasMore] = useState(true) // State to keep track if there are more items to load
  const [totalEntries, setTotalEntries] = useState(0)
  const classes = useStyles()
  const [showInfoPopup, setShowInfoPopup] = useState(false)
  const popupRef = useRef() // Ref for the popup
  const [activeTab, setActiveTab] = useState(0) // new state for active tab
  // Add state for the selected image
  const [hoveredImage, setHoveredImage] = useState(null)
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null)

  const showImagePopup = (image, index) => {
    setHoveredImage(image)
    setHoveredImageIndex(index)
  }

  // Function to hide popup
  const hideImagePopup = () => {
    setHoveredImage(null)
  }
  const closePopup = () => {
    setShowInfoPopup(false)
  }

  const renderTabLabel = (label, tabIndex) => {
    return activeTab === tabIndex ? `[${label}]` : label
  }
  // Event listener to close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [popupRef])
  const toggleInfoPopup = () => {
    setShowInfoPopup(!showInfoPopup)
    console.log(showInfoPopup)
    if (!showInfoPopup) {
      closePopup()
    }
  }
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const handleSearch = async (value = 1) => {
    setIsLoading(true)
    axios
      .get(
        `https://proxy.cors.sh/${XEBAY_API_URL}services/search/FindingService/v1?keywords=${searchQuery}&paginationInput.pageNumber=${value}&paginationInput.entriesPerPage=${entriesPerPage}`,
        {
          headers: {
            'X-EBAY-SOA-SECURITY-APPNAME': XEBAY_SOA_SECURITY_APPNAME,
            'X-EBAY-SOA-GLOBAL-ID': XEBAY_SOA_GLOBAL_ID,
            'X-EBAY-SOA-OPERATION-NAME': XEBAY_SOA_OPERATION_NAME,
            'x-cors-api-key': CORS_API_KEY,
          },
        }
      )
      .then((response) => {
        xml2js.parseString(response.data, (err, result) => {
          const items = result.findItemsByKeywordsResponse.searchResult[0].item
          const entriesPerPage =
            result.findItemsByKeywordsResponse.paginationOutput[0]
              .entriesPerPage
          const totalPages =
            result.findItemsByKeywordsResponse.paginationOutput[0].totalPages
          const totalEntries =
            result.findItemsByKeywordsResponse.paginationOutput[0].totalEntries
          setSearchResults(items)
          setPageNumber(value)
          setEntriesPerPage(entriesPerPage[0])
          setTotalPages(totalPages[0])
          setTotalEntries(totalEntries[0])
          setIsLoading(false)
        })
      })
      .catch((error) => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    handleSearch()
  }, [])

  useEffect(() => {
    window.document.title = 'eBay + Benin Bronzes'
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = '#ffffff'
    // Other code
  }, [])

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleChange = (event, value) => {
    handleSearch(value)
  }

  return (
    <div>
      <p
        className='ebay-des'
        onClick={toggleInfoPopup}
        style={{
          cursor: 'pointer',
          fontFamily: 'Inconsolata',
          border: '1px solid black',
          padding: '3px 8px',
          borderRadius: '50%',
          position: 'fixed',
          top: '20px',
          right: '20px',
        }}
      >
        i
      </p>
      <div
        ref={popupRef}
        className={`${classes.infoPopup} ${
          showInfoPopup ? classes.showPopup : ''
        }`}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label='simple tabs example'
          TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }} // Custom style for indicator
        >
          <Tab label={renderTabLabel('IGÙN, PROTOTYPE IX', 0)} />
          <Tab label={renderTabLabel('WHAT IS IGÙN?', 1)} />
        </Tabs>
        {activeTab === 0 && (
          <div className='ebay-tab'>
            <p className='ebay-des'>
              This repository leverages eBay's API to aggregate a dataset of
              images from active listings labeled 'Benin Bronzes.' Some of these
              images were utilized as training data for Prototype IX.
            </p>
            <p className='ebay-des'>
              I conceived Prototype IX in response to the theft of over 2,000
              Greek and Roman antiquities from the British Museum between 1993
              and 2023. Some of the stolen items were listed on eBay for as
              little as $50 by the seller—Sultan1966. While the Benin Bronzes
              are not directly implicated in this theft, this revelation prompts
              a critical reassessment of my dataset curation.
            </p>
          </div>
        )}
        {activeTab === 1 && (
          <div className='ebay-tab'>
            <p className='ebay-des'>IGUN, PROTOTYPE IX</p>
          </div>
        )}
      </div>

      {isLoading && (
        <div style={{ padding: '10px' }}>Loading data please wait...</div>
      )}

      <div className={classes.root}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '25px',
            fontFamily: 'lightnarrow',
          }}
        >
          <Typography>
            {' '}
            Showing {entriesPerPage} of {totalEntries} Benin Bronzes
          </Typography>
        </div>
        <Pagination
          count={totalEntries}
          page={pageNumber}
          onChange={handleChange}
        />
      </div>

      {!isLoading && (
        <Grid
          container
          spacing={0}
          justify='center'
          style={{ marginTop: '30px', width: '100%', margin: '0 auto' }}
        >
          {searchResults
            ? searchResults.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={1}
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    <img
                      onMouseEnter={() => showImagePopup(item, index)}
                      onMouseLeave={hideImagePopup}
                      alignItems='flex-end' // This aligns the Grid items themselves to the top of the container
                      className='croppedImage'
                      src={item.galleryURL[0].replace('140.jpg', '1600.jpg')}
                      alt={item.title[0]}
                    />
                  </div>
                </Grid>
              ))
            : 'No Records found'}
        </Grid>
      )}
      {hoveredImage && (
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            zIndex: 1000,
            backgroundColor: 'white',
            border:
              '1px solid black' /* Adjust positioning and styling as needed */,
          }}
        >
          <img
            src={hoveredImage.galleryURL[0]}
            alt={hoveredImage.title[0]}
            style={{ width: 'auto', height: 'auto' }}
          />
          <div
            style={{
              borderTop: '1px solid black',
              padding: '20px',
              display: 'flex',
            }}
          >
            {' '}
            <p
              style={{
                paddingRight: '15px',
                fontSize: '16px',
                fontFamily: 'Inconsolata',
                color: 'black',
              }}
            >
              [{String(hoveredImageIndex + 1).padStart(3, '0')}]
            </p>
            <p
              style={{
                wordWrap: 'break-word',
                fontSize: '16px',
                fontFamily: 'Inconsolata',
                color: 'black',
              }}
            >
              {hoveredImage.title[0]}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ebay
