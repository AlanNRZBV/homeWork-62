export interface IFeaturedItem{
  src: string
}

export interface IGalleryItem {
  title: string,
  img: string,
  description: string
  isSmall?: boolean
}

export interface IFeedback {
  username: string,
  email: string,
  message: string
}