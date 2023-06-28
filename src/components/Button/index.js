import React from 'react'
import PropTypes from 'prop-types';

const className = ['default', 'outline', 'text']
const Variants = ['default', 'outline', 'text']
const sizes = ['sm', 'md', 'lg']
const colors = ['default-color', 'outline', 'text', 'primary', 'secondary', 'danger']
const disable = ['disabled', 'enabled']
const shadow = ['disableshadow', 'disableshadowNull']
const StartIcon = ['null', 'start-shopping-cart']
const EndIcon = ['null', 'end-shopping-cart']


const Buttons = ({className, variant, size, color, disabled, disabledShadow, startIcon, endIcon}) => {
        const Variant = Variants.includes(variant) ? variant : Variants[0];
        const Size = sizes.includes(size) ? size : sizes[1];    
        const Color = colors.includes(color) ? color : colors[0];  
        const Disabled = disable.includes(disabled) ? disabled : disable[1];  
        const Shadow = shadow.includes(disabledShadow) ? disabledShadow : shadow[1];
        const StartIcons = StartIcon.includes(startIcon) ? startIcon : StartIcon[0];
        const EndIcons = EndIcon.includes(endIcon) ? endIcon : EndIcon[0];
  return (
    <button className={`btnn ${Variant} ${Size} ${Color} ${Disabled} ${Shadow} ${StartIcons} ${EndIcons}`}>Default</button>
  )
}

export default Buttons