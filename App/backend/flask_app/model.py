import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
import pickle

def get_sbert_embeddings(sentences):
  model = SentenceTransformer("./Models/sbert_all-MiniLM-L6-v2")
  model.to("cuda")
  embeddings = model.encode(sentences)
  X = np.stack(embeddings, axis=0)
  return X

def get_probs(sentences):
    X = get_sbert_embeddings(sentences)
    # scaler = pickle.load(open("./Models/scaler.sav", 'rb'))
    clf =  pickle.load(open("./Models/LR_noscale.sav", 'rb'))
    # X = scaler.transform(X)
    props = clf.predict_proba(X)
    props = list(props[:, 0])
    res = [{"text": sen, "score": score} for sen, score in zip(sentences, props)]
    return props

# if __name__ == "__main__":
#     sentences = ["hello brother", "teri maa ki"]
#     print(get_probs(sentences))
