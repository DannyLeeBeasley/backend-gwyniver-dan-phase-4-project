class PedalBoardSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :pedal_order, :stereo
end
