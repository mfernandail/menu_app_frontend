// 📁 src/icons/index.jsx

export function IconAdd(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V21A2,2
               0 0,0 5,23H19A2,2 0 0,0 21,21V5A2,2
               0 0,0 19,3M19,21H5V8H19V21Z" />
    </svg>
  )
}

export function IconStats(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 13h2v8H3v-8m4-6h2v14H7V7m4 4h2v10h-2V11m4
               3h2v7h-2v-7m4-6h2v13h-2V8z" />
    </svg>
  )
}

export function IconLogout(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.08,15.59L16.67,13H7V11H16.67L14.08,
               8.41L15.5,7L20.5,12L15.5,17L14.08,
               15.59M5,3H13V5H5V19H13V21H5A2,2
               0 0,1 3,19V5A2,2 0 0,1 5,3Z" />
    </svg>
  )
}

export { default as IconAdd } from './IconAdd'
export { default as IconMenu } from './IconMenu'
export { default as IconStats } from './IconStats'
export { default as IconLogout } from './IconLogout'