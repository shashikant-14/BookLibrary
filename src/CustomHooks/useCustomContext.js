import {useContext} from 'react'
import { BrowserContext } from '../Context/Provider'

export function useCustomContext() {
    let data = useContext(BrowserContext);
  return data;
}


