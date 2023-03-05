import {
  Actions,
  CreateFromImage,
  CreateFromText,
  Previewer,
  UploadImageModal,
} from './components'

export const CreateYourProducts = () => {
  return (
    <div>
      <UploadImageModal />
      <div className="App">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          <div>
            <Actions />
            <CreateFromImage />
            <CreateFromText />
          </div>
          <div>{false && <Previewer />}</div>
        </div>
        <button>Crea tu ecommerce!</button>
      </div>
    </div>
  )
}
