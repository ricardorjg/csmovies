import { config } from 'dotenv'

config()

const domain = process.env.REACT_APP_DOMAIN
const clientid = process.env.REACT_APP_CLIENTID
const audience = process.env.REACT_APP_AUDIENCE

export default {
	domain,
	clientid,
	audience
}