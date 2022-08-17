import {supabase} from '../../services/supabaseClient'

export default async(req, res) => {
 
  try{
}
    console.log(req.query)
 }                           I
    const{data} await supabase
    .from('comments')
    .select('*, user!inner(*)')
    .eq('postId', req.query.postId)

    res.status(200).send({data: data})

  } catch(error){
  res.status(500).send({error:'Error fetching comments'})
  }
}

