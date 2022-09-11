export const q = (...args: Parameters<typeof document.querySelector>) =>
  document.querySelector(...args)

export const el = (...args: Parameters<typeof document.createElement>) =>
  document.createElement(...args)
