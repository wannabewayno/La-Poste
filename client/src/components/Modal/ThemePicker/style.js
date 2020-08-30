export const flex = {
    display:'flex',
    justiftyContent:'center',
    alignItems:'center',
    margin:'0 auto'
}

export const paletteStyle = { 
    width:'100%',
    padding:'0 0.5em',
    height:'50px',
    ...flex,
    cursor:'pointer',
}

export const left =   { borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px' }
export const right =  { borderTopRightRadius:'5px', borderBottomRightRadius:'5px' }
export const top =    { borderTopLeftRadius:'5px', borderTopRightRadius:'5px' }
export const bottom = { borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px' }