using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Collision : MonoBehaviour
{
    private void OnCollisionEnter2D()
    {
        Debug.Log("U vrava!");
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.tag == "rocks")
        {
            Debug.Log("U perplasa ne shkemb!");
            Destroy(gameObject); 
            // first parameter is the object to destroy // second parameter is the time to delay destroy
        }
    }
}
