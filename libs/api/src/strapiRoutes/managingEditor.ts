import { AxiosInstance } from 'axios'
import { ApiManagingEditorManagingEditor } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'
import { strapiGet } from '../strapiGet'

export const fetchManagingEditor =
  strapiGet<ApiManagingEditorManagingEditor>('/managing-editor')

export const useManagingEditor = (strapi: AxiosInstance) =>
  makeDataHook('/managing-editor', fetchManagingEditor(strapi))
