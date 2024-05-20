import {GetFeedResponseInterface} from '@shared/components/feed/models/get-feed-response-interface'

export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  data: GetFeedResponseInterface | null
}
