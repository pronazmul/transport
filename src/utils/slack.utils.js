import { WebClient } from '@slack/web-api'
import config from '../config/index.js'

// Create Slack Client using Auth Token
const slackClient = new WebClient(config.slack_token)

// Initialize Module
const SlackUtils = {}

SlackUtils.postMessage = async (title = '', body = '', attachments = []) => {
  try {
    await slackClient.chat.postMessage({
      channel: config.slack_channel,
      text: `${title}\n${body}`,
      attachments: attachments.map((a) => {
        if (a?.mimetype.startsWith('video')) {
          return {
            fallback: 'Video Attachment',
            title: '',
            text: '',
            actions: [
              {
                type: 'button',
                text: 'Watch Video',
                url: a?.location,
              },
            ],
          }
        } else {
          return {
            fallback: 'Image Attachment',
            title: '',
            text: '',
            image_url: a?.location,
          }
        }
      }),
    })
  } catch (error) {
    console.log({ error })
  }
}

export default SlackUtils
