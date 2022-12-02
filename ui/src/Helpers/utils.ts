export const openUrlInNewTab = (url: string) => {
  if (url && url?.length !== 0) {
    window.open(
      url,
      '_blank' // <- This is what makes it open in a new window.
    )
  }
}
