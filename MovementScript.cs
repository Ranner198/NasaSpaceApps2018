using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;


public class MovementScript : MonoBehaviour {

    public float speed;

    public float offset;

    void Update () {

        Vector3 movement = new Vector3(0, offset, speed * Time.deltaTime * 60);

        transform.Rotate(movement);
	}
}
