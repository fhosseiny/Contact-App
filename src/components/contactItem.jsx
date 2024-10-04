function contactItem({data:{id,name,lastName,email,phone}}) {
   
  return (
    <li key={id}>
    <p>{name} {lastName}</p>
    <p>{email}</p>
    <p>{phone}</p>
    <button></button>
  </li>
  )
}

export default contactItem