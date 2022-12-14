// THIS FILE HOLDS ALL THE INTERFACES FOR THE APPLICATION

export type LikeType = 'hand' | 'heart' | 'emoji'

export type Followers = {
  follower_id: string
}

export type Followings = {
  following_id: string
}

export type BookmarkedPosts = {
  post_id: string
}

export type Post = {
  post_id: string
}

export type ProfilePicture = {
  title: string
  avatar: string
  cloudinary_id: string
}

export type WelcomeUser = {
  name: string
  quote: boolean
  cowrywise_handle: string
  link: string
  picture: string
}
export type GetStartedCard = {
  title: string
  description: string
  details: string
  link_text: string
  link: string
  mouse_out_image: string
  mouse_over_image: string
  bg_color: string
  bg_contrast: string
}
