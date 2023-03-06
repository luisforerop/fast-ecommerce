import { Fragment } from 'react'
import { Editor, Previewer, UploadImageModal } from './components'

export const CreateYourProducts = () => {
  return (
    <Fragment>
      <UploadImageModal />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          padding: '32px',
          height: 'var(--fe-measures-content)',
        }}
      >
        <Editor />
        <Previewer />
      </div>
    </Fragment>
  )
}
