import _PAGES from './pages'
import _DOCKER from './docker'
import _COMPOSE from './compose'

import _DOCKER_MD from './markdown/DOCKER.md'
import _COMPOSE_MD from './markdown/COMPOSE.md'

export const PAGES = { data: _PAGES }
export const DOCKER = { data: _DOCKER, markdown: _DOCKER_MD }
export const COMPOSE = { data: _COMPOSE, markdown: _COMPOSE_MD }
