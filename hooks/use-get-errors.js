export default function useGetErrors(err) {
  const errorMessages = [];

  if (err.graphQLErrors.length > 0) {
    console.log('graphql Error')
    errorMessages.push('graphql Error')
  } else if (err.networkError?.result?.errors?.length > 0) {
    err.networkError.result.errors.map((item) => {
      errorMessages.push(item.message)
    })
  } else {
    console.log('something went wrong')
    errorMessages.push('something went wrong')
  }
  console.log(JSON.stringify(err, null, 2))

  return errorMessages

}