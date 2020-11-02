import {americanFlag, solidFlag} from './flag'
import {cart} from './cart'
import {menu} from './menu'
import {caretDown} from './caretDown'

/**
 * Icon
 * @param {string} name Cause, Cart, or Menu
 * @param {Boolean} isOpen Is this icon's modal open?
 * @param {Boolean} hasBeenClicked Has this icon been clicked already?
 * @return {Component} This icon's svg or the caret down svg
 */
function Icon({name, isOpen, hasBeenClicked}) {
  if (isOpen) {
    return caretDown
  }

  if (name === 'cause') {
    if (hasBeenClicked) {
      return solidFlag
    }
    else {
      return americanFlag
    }
  }

  if (name === 'cart') {
    return cart
  }

  if (name === 'menu') {
    return menu
  }
}

export default Icon
