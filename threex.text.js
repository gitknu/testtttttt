var THREEx	= THREEx	|| {}


THREEx.Text	= function(text, options){
	options	= options || {
		font		: "droid serif",
		weight		: "bold",
		size		: 1,
		height		: 0.4,
	}

	var geometry	= new THREE.TextGeometry(text, options)

	geometry.computeBoundingBox();
	var center	= new THREE.Vector3();
	center.x	= (geometry.boundingBox.max.x - geometry.boundingBox.min.x) / 2
	// center.y	= (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2
	center.z	= (geometry.boundingBox.max.z - geometry.boundingBox.min.z) / 2
	geometry.vertices.forEach(function(vertex){
		vertex.sub(center)
	})
	
	var material	= new THREE.MeshNormalMaterial()
	var mesh	= new THREE.Mesh(geometry, material)
	// return mesh
	return mesh
}
