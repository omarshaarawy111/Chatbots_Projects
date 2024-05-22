  const axios = require('axios')
  /**
   * Get usa flag image
   * @title RandomFLagImage
   * @author Omar Shaarawy
   */
  const RandomFLagImage = async () => {
    session.flag_image_resp = undefined
    session.flag_image_error = undefined
    try {
      const { data } = await axios.get('https://dog.ceo/api/breeds/image/random')
      session.flag_image_resp = data
      return
    } catch (error) {
      session.flag_image_error = error
      // Prepare the message
      const message = {
        type: 'text',
        text: 'Sorry. Something wrong happenned. Please try again later.',
        // Markdown enables rich content, for example links or bold text. Otherwise, content will be displayed as-is
        markdown: true
      }

      // Send the message to the user (note the array, since you can send multiple payloads in the same reply)
      await bp.events.replyToEvent(event, [message])
    }
  }

  return RandomFLagImage()