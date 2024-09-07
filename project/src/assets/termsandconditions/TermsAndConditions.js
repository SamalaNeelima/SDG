import React from 'react';
import Header from '../contact/PagesHeader';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

// Inline CSS styles to be used within the component
const styles = {
  body: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#F2F2F2',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '16px',
    lineHeight: 1.6,
    boxSizing: 'border-box',
  },
  heading: {
    color: '#383a3d',
    marginBottom: '20px',
    fontSize: '32px',
  },
  paragraph: {
    color: '#24272C',
    fontSize: '16px',
    textAlign: 'justify',
  },
  content: {
    fontFamily: "'Poppins', sans-serif",
    padding: '10px',
    width: '80%',
    margin: '0 auto',
    background: '#F2F2F2',
    backgroundSize: 'cover',
  },
};

function TermsAndConditions() {
  return (
    <div style={styles.body}>
      <Header /> {/* Assuming this is a component with its own styling */}
      
      <div className="container py-4" style={styles.content}>
        <h1 style={styles.heading}>Mobile Privacy</h1>
        <p><strong>Effective Date:</strong> 2-07-2024</p>

        <h2>Introduction</h2>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod consequat massa, ac facilisis justo scelerisque sed. Integer non libero scelerisque, facilisis quam et, pretium orci.
          In lacinia nisi nec urna consequat bibendum. Mauris non nulla aliquet, sagittis metus a, aliquet enim. Donec tincidunt libero sit amet turpis posuere, vel ullamcorper lectus dictum. Fusce tristique risus id arcu malesuada, non interdum erat vehicula. Phasellus quis risus vitae sapien dapibus laoreet.
          Suspendisse potenti. Etiam bibendum nunc sit amet varius dapibus. Duis consectetur, mi vel tempor dictum, arcu massa venenatis nulla, at fermentum orci est in ex.
        </p>

        <h2>Information Collection</h2>
        <h3>Personal Data</h3>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula semper nisi, nec tincidunt ligula venenatis et. Vivamus id sapien magna. Aliquam erat volutpat. Nullam facilisis, lorem non fermentum ullamcorper, felis leo dignissim lectus, sit amet facilisis nisi ligula a augue. Ut malesuada libero a nibh vehicula, sit amet viverra mi placerat. Morbi dictum mi ut ligula fringilla, id vestibulum purus malesuada. Integer at dui at lorem pharetra bibendum sit amet a odio. Praesent in varius justo. Etiam sit amet augue sed urna congue sollicitudin. Curabitur auctor dui nec nulla molestie, at tincidunt purus ultrices.
        </p>

        <h3>Usage Data</h3>
        <p style={styles.paragraph}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>

        {/* Add similar structure for other sections with the same style */}
        
        <h2>Use of Data</h2>
        <h3>Providing and Maintaining Service</h3>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Vestibulum consectetur purus a libero interdum, vitae auctor elit fringilla. Nunc congue mi eget urna dictum, nec luctus velit ullamcorper. Aenean nec tincidunt nisi, sit amet blandit nunc. Nam id magna a erat faucibus sagittis. Aenean malesuada augue vel varius aliquet. Nulla facilisi. Etiam sit amet ante nec velit dignissim pulvinar. Nam sed dui a nibh varius feugiat. Nulla facilisi. Praesent ac orci vel risus tincidunt suscipit. Mauris sit amet sem ac nunc tristique accumsan.
        </p>

        {/* Add the remaining content with similar styling */}
      </div>
    </div>
  );
}

export default TermsAndConditions;
