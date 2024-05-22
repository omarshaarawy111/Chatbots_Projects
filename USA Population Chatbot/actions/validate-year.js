  /**
   * A validation function for the year stored
   * @title ValidateYear
   * @category Custom
   * @author Omar Shaarawy
   * @param {string} year - the year value from the user
   
   */
  const ValidateYear = async year => {
    bp.logger.info("/n---------------/n")
    bp.logger.info(year)
    bp.logger.info("/n---------------/n")

    const is_valid_value = await is_number(year)
    // we save this in session variable so we can use it later
    session.is_valid_year = is_valid_value
    return
  }
  // function to validate if it is number or not or null
  // that is prepared code for this kind of validation
  async function is_number(value) {
    // that is for null values filteration
    if (value == '' || value == null || value < 2013 || value > 2021) {
      return false
    }
    //means true
    return !isNaN(value)
  }
  return ValidateYear(args.year)