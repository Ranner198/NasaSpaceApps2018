using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class rotationscript : MonoBehaviour {

    public float speed = 0.1f;

	void Update () {
        transform.Rotate(new Vector3(0, speed * Time.deltaTime * 60, 0));
	}
}
