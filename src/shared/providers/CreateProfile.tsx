import { FC, useCallback, useMemo } from 'react'
import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { ContextState, IUserData } from '../models/index'

interface ICreateProfileContext {
  userName: ContextState<string>
  description: ContextState<string>
  webSiteLink: ContextState<string>
  webSiteName: ContextState<string>
  profileImage: ContextState<string>
  saveUserData: () => void
  userInformationCompleted: boolean
}
const CreateProfileContext = createContext({} as ICreateProfileContext)

export const useCreateProfileContext = () => useContext(CreateProfileContext)

export const CreateProfileContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { Provider } = CreateProfileContext
  const [userName, setUserName] = useState('')
  const [description, setDescription] = useState('')
  const [webSiteLink, setWebSiteLink] = useState('')
  const [webSiteName, setWebSiteName] = useState('')
  const [profileImage, setProfileImage] = useState('')

  const userInformationCompleted = useMemo(() => {
    return !!userName && !!description && !!webSiteLink && !!profileImage
  }, [userName, description, webSiteLink, webSiteName, profileImage])

  const saveUserData = () => {
    const userData: IUserData = {
      userName,
      description,
      website: {
        link: webSiteLink,
        description: webSiteName,
      },
      profileImage,
    }
    localStorage.setItem('userData', JSON.stringify(userData))
  }

  const context: ICreateProfileContext = {
    description: {
      set: setDescription,
      value: description,
    },
    userName: {
      set: setUserName,
      value: userName,
    },
    webSiteLink: {
      set: setWebSiteLink,
      value: webSiteLink,
    },
    profileImage: {
      set: setProfileImage,
      value: profileImage,
    },
    webSiteName: {
      set: setWebSiteName,
      value: webSiteName,
    },
    userInformationCompleted,
    saveUserData,
  }
  return <Provider value={context}>{children}</Provider>
}
