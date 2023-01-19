const handleErrors = (err) => {
  const errorMessages = [];

  if (err.graphQLErrors.length > 0) {
    err.graphQLErrors.map((item) => {
      errorMessages.push(item.message)
    })
    console.log('graphql Error')
  } else if (err.networkError?.result?.errors?.length > 0) {
    err.networkError.result.errors.map((item) => {
      errorMessages.push(item.message)
    })
  } else {
    errorMessages.push('Something Went Wrong')
  }
  console.log(JSON.stringify(err, null, 2))

  return errorMessages
}
export default handleErrors