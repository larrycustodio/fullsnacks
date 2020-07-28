import React, { FC, FormEvent } from 'react'

const StoreInputForm: FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div>
      <h3>Welcome!</h3>
      <div>Let&apos;s set up your store, so you can start selling protection plans</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="storeUrl">
          <div>Store URL</div>
          <input id="storeUrl" type="text" placeholder="amazing-store-url.com" />
        </label>
        <label htmlFor="storeName">
          <div>Store Name</div>
          <input id="storeName" type="text" placeholder="My Amazing Store" />
        </label>
        <label htmlFor="revenue">
          <div>Estimated Annual Revenue(optional)</div>
          <input id="revenue" type="text" />
        </label>
        <button type="submit">Continue</button>
      </form>
    </div>
  )
}

export { StoreInputForm }
