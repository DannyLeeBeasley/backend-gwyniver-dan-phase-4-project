class PedalSerializer < ActiveModel::Serializer
  attributes :id, :name, :effect_type, :price, :stereo, :number_of_inputs, :number_of_outputs, :image
  has_one :User
  has_one :PedalBoard
end
