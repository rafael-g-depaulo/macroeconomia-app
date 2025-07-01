import { AxiosInstance } from 'axios'
import { strapiGet } from '../strapiGet'
import { ApiBookBook } from '@strapi/types'
import { makeDataHook } from '../makeDataHook'

export const fetchBook = (id: string) =>
  strapiGet<ApiBookBook['attributes'] & { id: string }>(`/books/${id}`)

export const fetchBooks =
  strapiGet<(ApiBookBook['attributes'] & { id: string })[]>(`/books`)

export const useBook = (strapi: AxiosInstance, id: string) =>
  makeDataHook(`books/${id}`, fetchBook(id)(strapi))

export const useBooks = (strapi: AxiosInstance) =>
  makeDataHook(`books`, fetchBooks(strapi))
